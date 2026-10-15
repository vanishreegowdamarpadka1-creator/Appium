export interface AppiumCapabilityConfig {
  platformName: string;
  deviceName: string;
  automationName: string;
  browserName: string;
  platformVersion: string;
  udid: string;
  newCommandTimeout: number;
  chromeOptions?: { args: string[] };
  noReset?: boolean;
}

export const androidChromeCapabilities: AppiumCapabilityConfig = {
  platformName: 'Android',
  deviceName: 'Pixel_5',
  automationName: 'UiAutomator2',
  browserName: 'Chrome',
  platformVersion: '14',
  udid: 'emulator-5554',
  newCommandTimeout: 600,
  chromeOptions: {
    args: ['--disable-notifications'],
  },
  noReset: true,
};

export const iosSafariCapabilities: AppiumCapabilityConfig = {
  platformName: 'iOS',
  deviceName: 'iPhone 15',
  automationName: 'XCUITest',
  browserName: 'Safari',
  platformVersion: '17.0',
  udid: '00008110-00123456789A001E',
  newCommandTimeout: 600,
  noReset: true,
};
