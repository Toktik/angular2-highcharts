import { ModuleWithProviders } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsStatic } from './HighchartsService';
export declare class ChartModule {
    static forRoot(highchartsStatic: HighchartsStatic): ModuleWithProviders;
    constructor(highchartsStatic: HighchartsStatic);
}
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent };
