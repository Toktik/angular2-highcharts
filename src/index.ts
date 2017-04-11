import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { HighchartsStatic } from './HighchartsService'

const CHART_DIRECTIVES: any[] = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent
];

@NgModule({
    declarations: [CHART_DIRECTIVES],
    exports: [CHART_DIRECTIVES]
})
export class ChartModule {
    static forRoot(highchartsStatic: HighchartsStatic): ModuleWithProviders {
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useValue: highchartsStatic }
            ]
        }
    }

    constructor(highchartsStatic: HighchartsStatic) {
        let highchartsModules = ['highcharts'];
        // Plug highcharts modules
        highchartsModules.forEach((moduleName) => {
            let module = require(moduleName)
            module(highchartsStatic)
        });
    }
}

export {
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
};
