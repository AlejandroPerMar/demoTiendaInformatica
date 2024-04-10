import { AbstractEdmFieldReadStructureData } from '@sdk-edm/field-structure';
import { AbstractEdmFieldReadTime } from '@sdk-edm/field-time';


export interface AbstractEdmStructureReadXXGeneralTimeRange extends AbstractEdmFieldReadStructureData {
  from: AbstractEdmFieldReadTime;
  to: AbstractEdmFieldReadTime;
}