import * as React from 'react';
import { Input } from '../../components/Form';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = React.useState('dev@example.com');
    const [password, setPassword] = React.useState('password');
    const router = useRouter();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/account/dashboard#orders');
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div className="w-screen h-screen flex items-center justify-center">
                <div className="px-8 py-10 w-full max-w-[400px] bg-white shadow-lg shadow-slate-200 rounded-lg flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 mb-5 ring-2">
                        <h2 className="font-bold text-white">SH</h2>
                    </div>

                    <div className="text-center mb-5">
                        <h3 className="mb-2">Welcome</h3>
                        <p className="text-sm text-gray-400">
                            -- Please enter your credentials to login --
                        </p>
                    </div>
                    <div className="w-full">
                        <form action="" className="flex flex-col gap-4 w-full">
                            <Input
                                type="text"
                                label="Email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-zinc-600 bg-slate-50 placeholder:text-sm placeholder:text-zinc-400"
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-zinc-600 bg-slate-50 placeholder:text-sm placeholder:text-zinc-400"
                            />

                            <div className="flex items-center justify-between mt-3">
                                <label
                                    htmlFor="remember"
                                    className="ml-2 flex items-center space-x-2"
                                >
                                    <input type="checkbox" id="remember" />
                                    <span className="select-none">
                                        Remember me
                                    </span>
                                </label>

                                <Link
                                    href="/account/forgot-password"
                                    className="text-blue-500 hover:cursor-pointer"
                                >
                                    Forget Password?
                                </Link>
                            </div>

                            <button
                                aria-labelledby="loginButton"
                                type="button"
                                onClick={handleSubmit}
                                className="mt-2 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
