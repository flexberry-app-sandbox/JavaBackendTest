import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  model: DS.attr('string'),
  speed: DS.attr('number')
});

export let ValidationRules = {
  model: {
    descriptionKey: 'models.i-i-s-java-back-test-car.validations.model.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  speed: {
    descriptionKey: 'models.i-i-s-java-back-test-car.validations.speed.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CarE', 'i-i-s-java-back-test-car', {
    model: attr('Model', { index: 0 }),
    speed: attr('Speed', { index: 1 })
  });

  modelClass.defineProjection('CarL', 'i-i-s-java-back-test-car', {
    model: attr('Model', { index: 0 }),
    speed: attr('Speed', { index: 1 })
  });
};
