System.register(['angular2/core', 'angular2/common', '../services/reservations.service', 'jQuery', 'bootstrapJs', 'bootstrapDatePicker', 'bootstrapTimePicker'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, common_2, common_3, reservations_service_1;
    var ReservationFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
                common_3 = common_1_1;
            },
            function (reservations_service_1_1) {
                reservations_service_1 = reservations_service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            ReservationFormComponent = (function () {
                function ReservationFormComponent(reservationsService) {
                }
                ReservationFormComponent.prototype.ngOnInit = function () {
                    $('.datepicker').datepicker({
                        format: 'mm/dd/yyyy',
                        startDate: 'now',
                        daysOfWeekDisabled: '0'
                    });
                    $('#timepicker2').timepicker();
                    this.reservationForm = new common_1.ControlGroup({
                        'name': new common_2.Control('', common_3.Validators.compose([
                            common_3.Validators.required,
                            common_3.Validators.pattern('^[a-zA-Z]+$')
                        ])),
                        'email': new common_2.Control('', common_3.Validators.compose([
                            common_3.Validators.required,
                            common_3.Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')
                        ])),
                        'date': new common_2.Control('', common_3.Validators.required),
                        'time': new common_2.Control('', common_3.Validators.compose([
                            common_3.Validators.required,
                        ])),
                        'seats': new common_2.Control('', common_3.Validators.compose([
                            common_3.Validators.required,
                            this.validateSeats
                        ])),
                        'table': new common_2.Control('', common_3.Validators.compose([
                            common_3.Validators.required,
                            this.validateTable
                        ]))
                    });
                };
                /*
                validateTime(control:any):any{
                        let time = control.value;
                        if(isNaN (time) || time>25) return{ 'time':true };
                        return null;
                    }
                */
                ReservationFormComponent.prototype.validateSeats = function (control) {
                    var opening = control.value;
                    if (isNaN(opening) || opening > 8 || opening < 1)
                        return { 'seats': true };
                    return null;
                };
                ReservationFormComponent.prototype.validateTable = function (control) {
                    var opening = control.value;
                    if (isNaN(opening) || opening > 8 || opening < 1)
                        return { 'table': true };
                    return null;
                };
                /*
                validateName(control:any):any{
                    let name = control.value;
                    if(name.length <3 ) return{ 'name': true};
                    
                }
                */
                // submit button
                ReservationFormComponent.prototype.processReservation = function (data) {
                    console.log(data);
                };
                ReservationFormComponent = __decorate([
                    core_1.Component({
                        // from reservation.html
                        selector: 'reservation-form-component',
                        templateUrl: 'app/templates/reservationForm.html',
                        providers: [reservations_service_1.ReservationsService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof reservations_service_1.ReservationsService !== 'undefined' && reservations_service_1.ReservationsService) === 'function' && _a) || Object])
                ], ReservationFormComponent);
                return ReservationFormComponent;
                var _a;
            }());
            exports_1("ReservationFormComponent", ReservationFormComponent);
        }
    }
});
//# sourceMappingURL=reservationForm.componentVOID.js.map