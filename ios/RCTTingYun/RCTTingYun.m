//
//  RCTTingYun.m
//  RCTTingYun
//
//  Created by user on 2017/4/7.
//  Copyright © 2017年 simple. All rights reserved.
//

#import "RCTTingYun.h"
#import <tingyunApp/NBSAppAgent.h>
@implementation RCTTingYun
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(startWithAppID:(NSString *)key){
    [NBSAppAgent startWithAppID:key];
}
RCT_EXPORT_METHOD(setUserIdentifier:(NSString *)identifier){
    [NBSAppAgent setUserIdentifier:identifier];
}
RCT_EXPORT_METHOD(leaveBreadcrumb:(NSString *)crumb){
    [NBSAppAgent leaveBreadcrumb:crumb];
}
RCT_EXPORT_METHOD(trackEvent:(NSString *)event){
    [NBSAppAgent trackEvent:event];
}
RCT_EXPORT_METHOD(beginTracer:(NSString *)tracer){
    beginTracer(tracer);
}
RCT_EXPORT_METHOD(endTracer:(NSString *)tracer){
    endTracer(tracer)
}
@end
