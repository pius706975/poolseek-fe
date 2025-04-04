import PoolSeekLogo from '@/assets/svg/brand/brandLogo';
import Button from '@/components/button/Button';
import { AskButton, BrowseButton } from './components/Buttons';

const Home = () => {
    return (
        <div className="text-center">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 rounded-lg bg-gradient-to-r from-[#4169E1]/10 to-[#4169E1]/5 p-8 dark:from-[#4169E1]/20 dark:to-[#4169E1]/10">
                    <div className="flex items-center justify-center">
                        <PoolSeekLogo
                            width={150}
                            height={150}
                            showText={false}
                        />
                    </div>
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                        Welcome to <span className='text-[#4169E1]'>PoolSeek</span>
                    </h1>
                    <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                        A community-driven Q&A platform where you can find
                        answers to your questions and share your knowledge with
                        others.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {/* <Button>Ask a Question</Button>
                        <Button>Browse Questions</Button> */}

                        <AskButton />
                        <BrowseButton />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                            Top Questions
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className="border-b border-gray-100 pb-4 last:border-0 dark:border-gray-800">
                                    <h3 className="mb-1 font-medium text-[#4169E1] hover:underline">
                                        How to implement authentication in
                                        Next.js 15?
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <span>42 votes</span>
                                        <span className="mx-2">•</span>
                                        <span>12 answers</span>
                                        <span className="mx-2">•</span>
                                        <span>2 hours ago</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                            Popular Tags
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                'javascript',
                                'react',
                                'next.js',
                                'typescript',
                                'tailwindcss',
                                'node.js',
                                'api',
                                'database',
                                'authentication',
                            ].map(tag => (
                                <div
                                    key={tag}
                                    className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
