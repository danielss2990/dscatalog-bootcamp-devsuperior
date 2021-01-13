import { ThemeProvider } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Modal, TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import arrow from '../../../assets/leftArrow.png';
import { theme, text } from '../../../styles';

interface FormProductProps {
    setScreen: Function;
}

const FormProduct: React.FC<FormProductProps> = (props) => {

    const { setScreen} = props;

    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [categories, setCategories] = useState([
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 2,
            name: "Periféricos"
        },
        {
            id: 1,
            name: "Notebooks"
        },
        {
            id: 4,
            name: "Celulares"
        },
        {
            id: 5,
            name: "Hardware"
        },

    ]);

    const [showCategories, setShowCategories] = useState(false);

    const [product, setProduct] = useState({
        name: null,
        description: null,
        imgUrl: null,
        price: null,
        categories: null,
    });

    return (
        <View style={theme.formContainer}>
            {
                loading ? (<ActivityIndicator size="large" />) :

                    (<View style={theme.formCard}>
                        <ScrollView>


                            <Modal visible={showCategories} animationType="fade" transparent={true} presentationStyle="overFullScreen">
                                <View style={theme.modalContainer}>
                                    <ScrollView contentContainerStyle={theme.modalContent}>
                                        {
                                            categories.map(
                                                cat => (
                                                    <TouchableOpacity style={theme.modalItem} key={cat.id} onPress={() => {
                                                        setProduct({ ...product, categories: cat.name });
                                                        setShowCategories(!showCategories);
                                                    }}>
                                                        <Text>
                                                            {cat.name}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            )
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setScreen("products")} style={theme.goBackContainer}>
                                <Image source={arrow} />
                                <Text style={text.goBackText}>Voltar</Text>
                            </TouchableOpacity>
                            <TextInput placeholder="Nome do Produto" style={theme.formInput}/>
                            <TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
                                <Text>
                                    {
                                        product.categories == null ? 'Escolha uma categoria' : product.categories
                                    }
                                </Text>
                            </TouchableOpacity>
                            <TextInput placeholder="Preço" style={theme.formInput} />
                            <TouchableOpacity>
                                <Text>Carregar imagem</Text>
                            </TouchableOpacity>
                            <Text>
                                As imagens devem ser JPg ou PNg e nõa devem ultrapassar 5 mb.
                        </Text>
                            <TextInput multiline placeholder="Descrição" style={theme.textArea} />

                            <View>
                                <TouchableOpacity>
                                    <Text>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text>Salvar</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                    )}
        </View>
    )
}

export default FormProduct;