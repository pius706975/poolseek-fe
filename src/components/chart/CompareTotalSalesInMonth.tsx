import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ComparedTotalSalesInMonthChartProps {
    labels: string[];
    totalSales: string;
    lastMonthData: number[];
    thisMonthData: number[];
}

const ComparedTotalSalesInMonthChart: React.FC<
    ComparedTotalSalesInMonthChartProps
> = ({ labels, totalSales, lastMonthData, thisMonthData }) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';
    const textColor = isDarkMode ? '#ffffff' : '#333333';

    const options: ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false },
        },
        xaxis: {
            categories: labels,
            labels: { style: { colors: textColor }, show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                formatter: (value: number) => value.toLocaleString(),
                style: { colors: textColor },
            },
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light',
        },
        markers: {
            size: 3,
        },
        colors: ['gray', '#ab6bfe'],
        legend: {
            show: true,
            labels: { colors: textColor },
        },
    };

    const series = [
        {
            name: 'November',
            data: lastMonthData,
        },
        {
            name: 'December',
            data: thisMonthData,
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none mx-2">
            <div className="bg-gray-200 dark:bg-[#151515] p-3 rounded-md">
                <p className="font-semibold text-gray-700 dark:text-white">
                    Total Sales
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold dark:text-white">
                    {totalSales}
                </h1>
                <p className="text-xs">
                    trend title <span className="text-green-500">+ 75.3%</span>
                </p>
            </div>
            <div className="h-60">
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    height={235}
                />
            </div>
        </div>
    );
};

export default ComparedTotalSalesInMonthChart;
