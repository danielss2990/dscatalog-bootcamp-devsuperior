import React, { useState } from 'react';
import './styles.scss';
import BaseForm from '../../BaseForm';
import { makePrivateRequest } from 'core/utils/request';

type FormState = {
    name:string;
    price:string;
    category:string;
    description:'';

}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name:'Computador',
        price:'',
        category:'1',
        description:'',
    });
   
    const handleOnChange = (event: FormEvent ) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setFormData(data => ({...data,[name]:value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl:'https://www.havan.com.br/video-game-playstation-5-sony-pre-venda-bivolt/p',
            categories:[{id:formData.category}],
        }

        makePrivateRequest({url:'/products', method:'POST', data:payload}).then(() => {
            setFormData({name:'',category:'',price:'',description:''});
        });

        
    }
    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="fomr-control mb-5"
                            onChange={handleOnChange}
                            placeholder="Nome do produto" />

                        <select  value={formData.category} name="category" className="form-control mb-5" onChange={handleOnChange}>
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletrônicos</option>
                        </select>

                        <input
                            value={formData.price}
                            name="price"
                            type="text"
                            className="fomr-control"
                            onChange={handleOnChange}
                            placeholder="Preço" />
                    </div>
                    <div className="col">
                        <textarea 
                        className="form-control"
                        name="description"
                        value={formData.description}
                         id="" cols={30} 
                         rows={10}
                         onChange={handleOnChange} />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;