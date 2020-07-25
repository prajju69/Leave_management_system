import { render } from 'react-dom';
import '../../../scss//calenders/calender.scss';
import * as React from 'react';
import { createElement, extend } from '@syncfusion/ej2-base';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { eventsData, applyCategoryColor } from './datasource';

import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { SampleBase } from './sample-base';
/**
 *  Schedule editor custom fields sample
 */
export default class EditorCustomField extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], eventsData, null, true);
    }
    onPopupOpen(args) {
        if (args.type === 'Editor') {
            // Create required custom elements in initial time
            if (!args.element.querySelector('.custom-field-row')) {
                let row = createElement('div', { className: 'custom-field-row' });
                let formElement = args.element.querySelector('.e-schedule-form');
                formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild);
                let container = createElement('div', { className: 'custom-field-container' });
                let inputEle = createElement('input', {
                    className: 'e-field', attrs: { name: 'EventType' }
                });
                container.appendChild(inputEle);
                row.appendChild(container);
                let drowDownList = new DropDownList({
                    dataSource: [
                        { text: 'Public Event', value: 'public-event' },
                        { text: 'Maintenance', value: 'maintenance' },
                        { text: 'Commercial Event', value: 'commercial-event' },
                        { text: 'Family Event', value: 'family-event' }
                    ],
                    fields: { text: 'text', value: 'value' },
                    value: args.data.EventType,
                    floatLabelType: 'Always', placeholder: 'Event Type'
                });
                drowDownList.appendTo(inputEle);
                inputEle.setAttribute('name', 'EventType');
            }
        }
    }
    onEventRendered(args) {
        applyCategoryColor(args, this.scheduleObj.currentView);
        var schobj = document.getElementsByClassName("e-schedule")[0].ej2_instances[0]
        if(schobj.currentAction){
           console.log(schobj.currentAction);
        } 
    }
    render() {
        return (<div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent width='100%' height='650px' selectedDate={new Date(2018, 1, 15)} ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.data }} popupOpen={this.onPopupOpen.bind(this)} eventRendered={this.onEventRendered.bind(this)}>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
      </div>);
    }
}

//render(<EditorCustomField />, document.getElementById('sample'));