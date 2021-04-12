import {
  dayOfYear,
  currentDayOfYear,
} from 'https://deno.land/std/datetime/mod.ts';
  
console.log(dayOfYear(new Date("2021-03-03")));
console.log(currentDayOfYear());

