//
//  RCTTingYun.h
//  RCTTingYun
//
//  Created by user on 2017/4/7.
//  Copyright © 2017年 simple. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTAssert.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif
@interface RCTTingYun : NSObject<RCTBridgeModule>

@end
