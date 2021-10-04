import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  ViewProps,
} from 'react-native';
import {StyledComponentProps, styled} from '@ui-kitten/components';

import React from 'react';

export type StatusBarProps = RNStatusBarProps & StyledComponentProps;

//@ts-ignore
@styled('StatusBar')
export class StatusBar extends React.Component<StatusBarProps> {
  public render(): React.ReactElement<ViewProps> {
    const {eva, ...statusBarProps} = this.props;

    return <RNStatusBar {...eva?.style} {...statusBarProps} />;
  }
}
