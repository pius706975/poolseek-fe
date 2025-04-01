import QABackground from '@/assets/svg/auth/signupcontent';
import PoolSeekLogo from '@/assets/svg/brand/brandLogo';

export default function SignUpBg() {
    return (
        <div className={`min-h-screen w-full`}>
            <div className="relative min-h-screen w-full overflow-hidden">
                <QABackground className="absolute inset-0 z-0" />

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
                    <div className="flex items-center mb-8 w-full max-w-md p-6">
                        <PoolSeekLogo width={100} height={100} />
                        <h1 className="text-5xl font-bold text-[#4169E1]">
                            PoolSeek
                        </h1>
                    </div>

                    <div className="">
                        <h1 className='text-2xl font-semibold'>Join Stack Seek and Level Up!</h1>

                        <div>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>🚀 Curious? Ask away and get answers!</li>
                                <li>📌 Keep track of your favorite topics and discussions</li>
                                <li>🏆 Boost your reputation by helping others</li>
                                <li>💎 Engage in meaningful discussions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
