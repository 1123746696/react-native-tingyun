# react-native-tingyun

1.android
a.在android/build.gradle中加入：
dependencies {
        classpath 'com.networkbench.newlens.agent.android:agent-gradle-plugin:2.9.0'
    }
b.在app/build.gradle顶部加入：
apply plugin: 'newlens'

c.配置应用权限
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.READ_LOGS" />
<uses-permission android:name="android.permission.INTERNET" />
<!--使用点选功能需配置悬浮窗权限(选配)-->
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />

d.插入代码
1. 在嵌码项目工程的启动页面“MainActivity”中import NBSAppAgent类
import com.networkbench.agent.impl.NBSAppAgent;
2. 在“Application”中的onCreate()方法（如未找到该方法请新增onCreate()）中初始化Android SDK
NBSAppAgent.setLicenseKey("key").withLocationServiceEnabled(true).start(this.getApplicationContext());//Appkey 请从官网获取
注：
1. 若无需采集地理位置，请使用以下配置
NBSAppAgent.setLicenseKey("key").start(this.getApplicationContext());//Appkey 请从官网获取
2. SDK 默认采集所有进程的数据，若只想采集主进程数据， 请使用以下配置
NBSAppAgent.setLicenseKey("key").withOnlyMainProcEnabled(true).start(this.getApplicationContext());//Appkey 请从官网获取

1.集成ios
1.请在你的工程目录结构中，添加友盟统计框架，在选项TARGETS--> Build Phases-->Link Binary With Libraries-->Add Other， 选择文件node_modules/react-native-umeng-analytics/ios/analytics_ios_5.4.1/UMAnalytics.framework
选择文件node_modules/react-native-tingyun/ios/tingyunApp.framework

2.在工程目录结构中,添加友盟框架引用,在TARGETS-->Build Settings-->Framework Search Paths, 添加:
$(SRCROOT)/../node_modules/react-native-tingyun/ios

3.添加依赖库：CoreTelephony.framework，libz.tbd，Security.framework，SystemConfiguration.framework

使用：#import <tingyunApp/NBSAppAgent.h>
[NBSAppAgent startWithAppID:@"key"];
