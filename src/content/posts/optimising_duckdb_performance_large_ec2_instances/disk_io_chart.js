import diskIoDataUrl from './disk_io_cpu_timeseries.csv?url';

const modeDomain = ['default', 'split'];

const modeRange = ['#2563eb', '#d97706'];

const segmentColorDomain = ['default', 'CTAS', 'CHECKPOINT'];

const segmentColorRange = ['#2563eb', '#0f766e', '#d97706'];

export default {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description:
        'CPU time-series for the create-database disk I/O benchmark on r8id.32xlarge, comparing the default run against the no_wal_writes split run across EBS and local RAID0 SSD.',
    width: 200,
    height: 90,
    spacing: 12,
    padding: {
        left: 8,
        right: 116,
        top: 4,
        bottom: 4,
    },
    data: {
        url: diskIoDataUrl,
        format: {
            type: 'csv',
            parse: {
                logical_cpus: 'number',
                ebs_throughput_mibps: 'number',
                threads: 'number',
                effective_threads: 'number',
                sample_index: 'number',
                elapsed_seconds: 'number',
                absolute_elapsed_seconds: 'number',
                cpu_total_percent: 'number',
                cpu_average_percent: 'number',
                host_cpu_percent: 'number',
                duckdb_thread_cpu_percent: 'number',
                phase_duration_seconds: 'number',
            },
        },
    },
    transform: [
        {
            calculate:
                "datum.storage_target === 'SSD' && datum.storage_layout === 'raid0_ssd' ? 'Local SSD (RAID0)' : datum.storage_target",
            as: 'storage_display',
        },
        {
            calculate: "datum.variant === 'baseline' ? 'default' : 'split'",
            as: 'mode_label',
        },
        {
            calculate: "datum.phase === 'ctas' ? datum.phase_duration_seconds : 0",
            as: 'ctas_duration_seconds',
        },
        {
            joinaggregate: [
                {
                    op: 'max',
                    field: 'ctas_duration_seconds',
                    as: 'split_ctas_duration_seconds',
                },
            ],
            groupby: ['storage_display', 'variant', 'operation'],
        },
        {
            calculate:
                "datum.mode_label === 'split' && datum.phase === 'checkpoint' ? datum.elapsed_seconds + datum.split_ctas_duration_seconds : datum.elapsed_seconds",
            as: 'plot_elapsed_seconds',
        },
        {
            calculate:
                "datum.mode_label === 'split' ? (datum.phase === 'ctas' ? 'CTAS' : 'CHECKPOINT') : 'combined run'",
            as: 'phase_display',
        },
        {
            calculate:
                "datum.mode_label === 'default' ? 'default' : (datum.phase === 'ctas' ? 'CTAS' : 'CHECKPOINT')",
            as: 'segment_color_label',
        },
    ],
    config: {
        view: {
            stroke: null,
        },
        axis: {
            labelFontSize: 12,
            titleFontSize: 12,
            gridColor: '#e5e7eb',
            domainColor: '#9ca3af',
            tickColor: '#9ca3af',
        },
        header: {
            labelFontSize: 12,
            labelColor: '#111827',
            title: null,
        },
        legend: {
            orient: 'right',
            direction: 'vertical',
            columns: 1,
            title: 'Segment',
            titleFontSize: 12,
            labelFontSize: 12,
            symbolStrokeWidth: 4,
        },
    },
    facet: {
        row: {
            field: 'mode_label',
            type: 'nominal',
            sort: modeDomain,
            header: {
                labelAngle: 0,
                labelFontWeight: 700,
            },
        },
        column: {
            field: 'storage_display',
            type: 'nominal',
            sort: ['EBS', 'Local SSD (RAID0)'],
            header: {
                labelFontWeight: 700,
            },
        },
    },
    spec: {
        encoding: {
            x: {
                field: 'plot_elapsed_seconds',
                type: 'quantitative',
                title: 'Seconds from run start',
                scale: {
                    domain: [0, 15],
                },
                axis: {
                    values: [0, 5, 10, 15],
                },
            },
            y: {
                field: 'duckdb_thread_cpu_percent',
                type: 'quantitative',
                title: 'CPU (% of requested 64 threads)',
                scale: {
                    domain: [0, 120],
                },
                axis: {
                    tickCount: 5,
                },
            },
        },
        layer: [
            {
                data: {
                    values: [{ reference_value: 100 }],
                },
                mark: {
                    type: 'rule',
                    color: '#9ca3af',
                    strokeDash: [4, 4],
                    strokeWidth: 1,
                },
                encoding: {
                    y: {
                        field: 'reference_value',
                        type: 'quantitative',
                    },
                },
            },
            {
                transform: [
                    {
                        filter:
                            "datum.mode_label === 'split' && datum.phase === 'checkpoint' && datum.sample_index === 0",
                    },
                ],
                mark: {
                    type: 'rule',
                    color: '#d1d5db',
                    strokeDash: [4, 4],
                    strokeWidth: 1,
                },
                encoding: {
                    x: {
                        field: 'plot_elapsed_seconds',
                        type: 'quantitative',
                    },
                },
            },
            {
                mark: {
                    type: 'line',
                    strokeWidth: 3,
                    interpolate: 'monotone',
                },
                encoding: {
                    order: {
                        field: 'plot_elapsed_seconds',
                        type: 'quantitative',
                    },
                    color: {
                        field: 'segment_color_label',
                        type: 'nominal',
                        legend: {
                            values: segmentColorDomain,
                        },
                        scale: {
                            domain: segmentColorDomain,
                            range: segmentColorRange,
                        },
                    },
                    tooltip: [
                        {
                            field: 'storage_display',
                            type: 'nominal',
                            title: 'Storage',
                        },
                        {
                            field: 'mode_label',
                            type: 'nominal',
                            title: 'Run type',
                        },
                        {
                            field: 'phase_display',
                            type: 'nominal',
                            title: 'Segment',
                        },
                        {
                            field: 'plot_elapsed_seconds',
                            type: 'quantitative',
                            title: 'Seconds from run start',
                            format: '.3f',
                        },
                        {
                            field: 'duckdb_thread_cpu_percent',
                            type: 'quantitative',
                            title: 'CPU (% of requested 64 threads)',
                            format: '.1f',
                        },
                        {
                            field: 'host_cpu_percent',
                            type: 'quantitative',
                            title: 'CPU (% of full machine)',
                            format: '.1f',
                        },
                        {
                            field: 'phase_duration_seconds',
                            type: 'quantitative',
                            title: 'Benchmark phase duration (s)',
                            format: '.2f',
                        },
                        {
                            field: 'raw_phase_name',
                            type: 'nominal',
                            title: 'Raw phase',
                        },
                    ],
                },
            },
            {
                mark: {
                    type: 'point',
                    filled: true,
                    size: 16,
                },
                encoding: {
                    color: {
                        field: 'segment_color_label',
                        type: 'nominal',
                        legend: null,
                        scale: {
                            domain: segmentColorDomain,
                            range: segmentColorRange,
                        },
                    },
                    tooltip: [
                        {
                            field: 'storage_display',
                            type: 'nominal',
                            title: 'Storage',
                        },
                        {
                            field: 'mode_label',
                            type: 'nominal',
                            title: 'Run type',
                        },
                        {
                            field: 'phase_display',
                            type: 'nominal',
                            title: 'Segment',
                        },
                        {
                            field: 'plot_elapsed_seconds',
                            type: 'quantitative',
                            title: 'Seconds from run start',
                            format: '.3f',
                        },
                        {
                            field: 'duckdb_thread_cpu_percent',
                            type: 'quantitative',
                            title: 'CPU (% of requested 64 threads)',
                            format: '.1f',
                        },
                        {
                            field: 'phase_duration_seconds',
                            type: 'quantitative',
                            title: 'Benchmark phase duration (s)',
                            format: '.2f',
                        },
                    ],
                },
            },
        ],
    },
};