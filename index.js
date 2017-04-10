/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Platform,

} from 'react-native';
let BTingYun = require('react-native').NativeModules.TingYun;
export default class TingYun{
  static startWithAppID(key:String) {
    BTingYun.startWithAppID(key);
  }

  /***
   * 自定义ID
   * @param identifier 用户自定义ID为当前用户设置唯一标示码，在MainActivity的onCreate里用初始化方法传入UserID。
     */
  static setUserIdentifier(identifier:String) {
    BTingYun.setUserIdentifier(identifier);
  }
  /***
   * 面包屑能够更好的协助用户调查崩溃发生的原因，可以知晓用户发生崩溃之前的代码逻辑与崩溃轨迹结合使用能够更好的复现用户崩溃场景。
   * @param crumb 最多包含100个字符，支持中文、英文、数字、下划线，但不能包含空格或其他的转义字符
     */
  static leaveBreadcrumb(crumb:String) {
    BTingYun.leaveBreadcrumb(crumb);
  }

  /***
   * 自定义事件用于统计App中的任意事件，开发者可以在SDK初始化后的任意位置添加自定义事件，并设置对应上传参数。如：真实用户操作时候点击某个功能按钮或触发了某个功能事件等。
   * @param event EVENT_ID最多包含32个字符，支持中文、英文、数字、下划线，但不能包含空格或其他的转义字符
     */
  static trackEvent(event:String) {
    BTingYun.trackEvent(event);
  }

  /***
   *由于自定义Trace是成对出现的，请勿跨方法、跨进程以及在异步加载和递归调用中使用该接口。
   * 听云SDK默认采集系统类和方法的性能数据，无法采集开发者自定义类和方法的性能数据。
   * 使用“自定义Trace”接口就可以帮助开发者时刻了解所写代码的健壮性及其性能数据。
   * 如：开发者想要了解某个自定义方法的初始化耗时及性能消耗情况，就可以在该自定义方法前后添加“自定义Trace”接口即可。
   *
   * @param tracer 为当前方法所在方法名或自定义名称，支持中文、英文、数字、下划线，但不能包含空格或其他的转义字符
     */
  static beginTracer(tracer:String) {
    BTingYun.beginTracer(tracer);
  }
  static endTracer(tracer:String) {
    BTingYun.endTracer(tracer);
  }
};
