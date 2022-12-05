import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')

    return (
        <div className='mb-10'>
            <h1 className='text-center text-gray-800 py-4 font-bold text-4xl'>Blogs</h1>
            <div className='flex md:flex-row flex-col px-4 md:px-10 '>
                <div>
                    <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
                        <div className="w-full mx-auto space-y-4">
                            <h1 className="text-5xl font-bold leading-none">Difference between SQL and NoSQL</h1>
                            <div className="flex flex-wrap space-x-2 text-sm  text-gray-800">
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#database</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#sql</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#Nosql</a>
                            </div>
                            <p className="text-sm  text-gray-800">by
                                <a href='/' target="_blank" rel="noopener noreferrer" className="hover:underline  text-violet-800">
                                    <span>Leroy Jenkins</span>
                                </a>on
                                <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                            </p>
                        </div>
                        <div className=" text-gray-800">
                            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
                        <div className="w-full mx-auto space-y-4">
                            <h1 className="text-5xl font-bold leading-none">What is JWT, and how does it work?</h1>
                            <div className="flex flex-wrap space-x-2 text-sm  text-gray-800">
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#jwt</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#token</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#Nosql</a>
                            </div>
                            <p className="text-sm  text-gray-800">by
                                <a href='/' target="_blank" rel="noopener noreferrer" className="hover:underline  text-violet-800">
                                    <span>Leroy Jenkins</span>
                                </a>on
                                <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                            </p>
                        </div>
                        <div className=" text-gray-800">
                            <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker.</p>
                        </div>
                    </article>
                </div>

            </div>
            <div className='flex md:flex-row flex-col px-4 md:px-10 '>
                <div>
                    <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
                        <div className="w-full mx-auto space-y-4">
                            <h1 className="text-5xl font-bold leading-none">What is the difference between javascript and NodeJS?</h1>
                            <div className="flex flex-wrap space-x-2 text-sm  text-gray-800">
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#javascript</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#nodejs</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#backend</a>
                            </div>
                            <p className="text-sm  text-gray-800">by
                                <a href='/' target="_blank" rel="noopener noreferrer" className="hover:underline  text-violet-800">
                                    <span>Christofer Nolan</span>
                                </a>on
                                <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                            </p>
                        </div>
                        <div className=" text-gray-800">
                            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className="max-w-2xl px-6 py-10 mx-auto space-y-16    text-gray-800">
                        <div className="w-full mx-auto space-y-4">
                            <h1 className="text-5xl font-bold leading-none">How does NodeJS handle multiple requests at the same time?</h1>
                            <div className="flex flex-wrap space-x-2 text-sm  text-gray-800">
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#node</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#nodejs</a>
                                <a rel="noopener noreferrer" href='/' className="p-1 hover:underline">#javascript</a>
                            </div>
                            <p className="text-sm  text-gray-800">by
                                <a href='/' target="_blank" rel="noopener noreferrer" className="hover:underline  text-violet-800">
                                    <span>Robert</span>
                                </a>on
                                <time datetime="2021-02-12 15:34:18-0200">March 12th 2021</time>
                            </p>
                        </div>
                        <div className=" text-gray-800">
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                        </div>
                    </article>
                </div>

            </div>
        </div>
    );
};

export default Blogs;