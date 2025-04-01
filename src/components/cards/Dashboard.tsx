import { DashboardIcon, UserIcon } from '../icons/dashboard/icons';

type DashboardCardProps = {
    title: string;
    variable: string;
    total: string;
    trendTitle: string;
    percentage: string;
};
export const DashboardCard = ({
    title,
    variable,
    total,
    trendTitle,
    percentage,
}: DashboardCardProps) => {
    return (
        <div className="w-full bg-gray-200 dark:bg-[#151515] p-5 rounded-lg dark:text-white border dark:border-gray-600 shadow-md shadow-gray-400 dark:shadow-none mb-5">
            <div className="flex items-center justify-between text-md mb-2">
                <p className="font-semibold">{title}</p>
                <DashboardIcon />
            </div>

            <h1 className="text-2xl font-semibold mb-2">
                {variable} {total}
            </h1>

            <p className="text-xs">
                {trendTitle}{' '}
                <span className="text-green-500">{percentage}</span>
            </p>
        </div>
    );
};

interface SalesData {
    img: string;
    name: string;
    email: string;
    earn: string;
}

interface RecentSalesProps {
    salesData: SalesData[];
}

export const RecentSales = ({ salesData }: RecentSalesProps) => {
    return (
        <div className="w-full sm:w-full lg:w-full p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-md shadow-gray-400 dark:shadow-none">
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Recent Sales</h1>
                <p className="text-xs text-gray-500">
                    You made 350 sales this month
                </p>
            </div>

            <div className="space-y-4">
                {salesData.map((sale, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
                                <UserIcon />
                            </div>

                            <div>
                                <h3 className="font-semibold text-sm">
                                    {sale.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    {sale.email}
                                </p>
                            </div>
                        </div>

                        <h3 className="font-semibold text-sm">{sale.earn}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
