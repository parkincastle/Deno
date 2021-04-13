//deno는 local import와 Remote import를 각각 지원한다.
// Local Import : 원래 쓰던 방식
import { add } from './play-deno.ts';   //ex 

// Remote Import : 리모트에서 URL로 JavaScript을 바로 가져오는 방식
import { add } from 'https://x.nest.land/ramda@0.27.0/source/index.js'; //ex


