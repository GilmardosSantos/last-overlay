export interface WeeklyChartListResponse {
  weeklychartlist: {
    '@attr': { user: string };
    chart: WeeklyChartListChart[];
  };
}

export interface WeeklyChartListChart {
  '#text': string;
  from: string | number;
  to: string | number;
}
