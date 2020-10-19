import React from 'react';
import './styles.scss';
import BaseForm from '../../BaseForm';

const Form = () => {
    return (
        <BaseForm title="cadastrar um produto">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="fomr-control " />
                </div>
            </div>
        </BaseForm>
    )
}

export default Form;