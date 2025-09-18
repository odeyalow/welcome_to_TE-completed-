import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    // РЕШЕНИЕ:
    // Использовал useCallback чтобы мемоизировать функцию
    const makeLog = useCallback(() => console.log('hi from MainComponent'), []);
    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));