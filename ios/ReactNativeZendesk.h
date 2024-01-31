
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReactNativeZendeskSpec.h"

@interface ReactNativeZendesk : NSObject <NativeReactNativeZendeskSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ReactNativeZendesk : NSObject <RCTBridgeModule>
#endif

@end
