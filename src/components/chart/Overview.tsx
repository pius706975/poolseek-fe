import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface OverviewBarChartProps {
    labels: string[];
    datasets: number[];
}

const OverviewBarChart: React.FC<OverviewBarChartProps> = ({
    labels,
    datasets,
}) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const options: ApexOptions = {
        chart: {
            type: 'bar',
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
                formatter: value => `$${value}`,
                style: { colors: isDarkMode ? '#ffffff' : '#000000' },
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: '60%',
            },
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light',
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: [isDarkMode ? '#ffcc80' : '#80c1ff'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
    };

    const series = [
        {
            name: 'Revenue',
            data: datasets,
            color: isDarkMode ? '#ff9900' : '#4095ff',
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600">
            <h1 className="text-2xl font-semibold mb-4 dark:text-white">
                Overview
            </h1>
            <Chart options={options} series={series} type="bar" height={350} />
        </div>
    );
};

export default OverviewBarChart;
