import * as React from 'react';
import * as Style from './style.scss';

interface Props {
}

const Container: React.SFC<Props> = props => (
    <div className={Style.component}>
        Hello World!
    </div>
);

export const App = Container;