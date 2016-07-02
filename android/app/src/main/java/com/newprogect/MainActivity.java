package com.newprogect;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

  private ReactInstanceManager mReactInstanceManager;
  private ReactRootView mReactRootView;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      //初始化百度地图
      SDKInitializer.initialize(getApplicationContext());

      mReactRootView = new ReactRootView(this);
      mReactInstanceManager = ReactInstanceManager.builder()
              .setApplication(getApplication())
              .setBundleAssetName("index.android.bundle")
              .setJSMainModuleName("index.android")
              .addPackage(new MainReactPackage())
              .addPackage(new BaiduMapReactPackage(this)) // <-- Register package here
              .setUseDeveloperSupport(true)
              .setInitialLifecycleState(LifecycleState.RESUMED)
              .build();

      mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProj", null);
      setContentView(mReactRootView);
  }
