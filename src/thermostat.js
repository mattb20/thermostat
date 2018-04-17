function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 32;
  this._maximumTemperaturePowerSaving = 25;
  this._powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this._powerSavingMode === true &&
    this._temperature === this._maximumTemperaturePowerSaving) {
    throw new Error("temperature is at maximum for power saving mode!");
  }
  else if (this._temperature === this._maximumTemperature) {
    throw new Error("temperature is already at maximum!");
  };
  this._temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this._temperature <= this._minimumTemperature) {
    throw new Error("temperature is already at minimum!");
  };
  this._temperature--;
};

Thermostat.prototype.togglePowerSaving = function() {
  this._powerSavingMode ^= true;
};
