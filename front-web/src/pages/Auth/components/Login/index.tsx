import React from 'react';
import './styles.scss';
import AuthCard from '../Card';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Buttonicon from 'core/components/Buttonicon';

type FormData = {
    email:string;
    password:string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit = (data: FormData) => {
        //chamar API de autenticação
    }
    return (
        <AuthCard title="login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" className="form-control input-base margin-bottom-30" 
                placeholder="Email" 
                name="email" 
                ref={register} />
                <input type="password" className="form-control input-base margin-bottom-30" 
                placeholder="Senha" 
                name="password" 
                ref={register} />

                <Link to="/admin/auth/recover" className="login-link-recover" >
                    Esqueci a senha?
                </Link>
                <div className="login-submit">
                    <Buttonicon text="logar" />
                </div>
                <div className="text-center">
                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="/admin/auth/register" className="login-link-register" >
                        CADASTRAR
                    </Link>
                </div>

            </form>
        </AuthCard>
    );
}

export default Login;