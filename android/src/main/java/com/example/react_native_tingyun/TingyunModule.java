package com.example.react_native_tingyun;

import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.networkbench.agent.impl.NBSAppAgent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * Created by user on 16/4/7.
 */
public class TingYunModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext mReactContext;
    public TingYunModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
    }
    @Override
    public String getName() {
        return "TingYun";
    }
    @ReactMethod
    public void startWithAppID(String key) {
        NBSAppAgent.setLicenseKey(key).withLocationServiceEnabled(true).start(this.mReactContext.getBaseContext());
    }
    @ReactMethod
    public void setUserIdentifier(String identifierey) {
        NBSAppAgent.setLicenseKey("").setUserIdentifier(identifierey);
    }

    @ReactMethod
    public void leaveBreadcrumb(String crumb) {
        NBSAppAgent.leaveBreadcrumb(crumb);
    }
    @ReactMethod
    public void trackEvent(String event) {
        NBSAppAgent.onEvent(event);
    }
    @ReactMethod
    public void beginTracer(String tracer) {
        NBSAppAgent.beginTracer(tracer);
    }
    @ReactMethod
    public void endTracer(String tracer) {
        NBSAppAgent.endTracer(tracer);
    }

}