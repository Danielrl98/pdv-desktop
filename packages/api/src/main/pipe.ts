import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class TransformQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const result = {};
    
    for (const key in value) {
      if (key.includes('.')) {
        const keys = key.split('.');
        let current = result;
        
        for (let i = 0; i < keys.length; i++) {
          const part = keys[i];
          if (i === keys.length - 1) {
            current[part] = value[key];
          } else {
            current[part] = current[part] || {};
            current = current[part];
          }
        }
      } else {
        result[key] = value[key];
      }
    }
    
    return result;
  }
}