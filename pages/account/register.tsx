import * as React from 'react';
import { Input } from '../../components/Form';
import Head from 'next/head';

const Register = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>

            <div className="w-screen h-screen flex items-center justify-center">
                <div className="px-8 py-10 w-full max-w-[400px] bg-white shadow-lg shadow-slate-200 rounded-lg flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 mb-5 ring-2">
                        <h2 className="font-bold text-white">SH</h2>
                    </div>

                    <div className="text-center mb-5">
                        <h3 className="mb-2">Welcome</h3>
                        <p className="text-sm text-gray-400">
                            -- Fill in the form to register --
                        </p>
                    </div>
                    <div className="w-full">
                        <form action="" className="flex flex-col gap-4 w-full">
                            <Input
                                type="text"
                                placeholder="Name"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-zinc-600 bg-slate-50 placeholder:text-sm placeholder:text-zinc-400"
                            />

                            <Input
                                type="text"
                                placeholder="Email"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-zinc-600 bg-slate-50 placeholder:text-sm placeholder:text-zinc-400"
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-zinc-600 bg-slate-50 placeholder:text-sm placeholder:text-zinc-400"
                            />

                            <button
                                aria-labelledby="registerAccount"
                                className="mt-2 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                            >
                                Register Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
