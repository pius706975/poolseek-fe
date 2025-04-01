import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface LineChartProps {
    labels: string[];
    currentYearEarnings: number[];
    previousYearEarnings: number[];
    totalEarning: string;
}

const TotalEarningLineChart: React.FC<LineChartProps> = ({
    labels,
    currentYearEarnings,
    previousYearEarnings,
    totalEarning,
}) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const options: ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false },
        },
        xaxis: {
            categories: labels,
            labels: { style: { colors: isDarkMode ? '#ffffff' : '#000000' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                formatter: value => `$${value.toLocaleString()}`,
                style: { colors: isDarkMode ? '#ffffff' : '#000000' },
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        grid: {
            show: false,
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light',
        },
        legend: {
            position: 'top',
            labels: {
                colors: isDarkMode ? '#ffffff' : '#000000',
            },
        },
    };

    const series = [
        {
            name: 'This Year',
            data: currentYearEarnings,
            color: '#4bc0c0',
        },
        {
            name: '2024',
            data: previousYearEarnings,
            color: '#4bc0c066',
        },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-5 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600">
            <div className="flex items-center gap-6">
                <p className="font-semibold text-gray-700 dark:text-white">
                    Total Earnings
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold dark:text-white">
                    {totalEarning}
                </h1>
                <p className="text-xs">
                    trend title <span className="text-green-500">+ 75.3%</span>
                </p>
            </div>

            <Chart options={options} series={series} type="line" height={300} />
        </div>
    );
};

export default TotalEarningLineChart;
