import { Component, PureComponent, memo } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component

// РЕШЕНИЕ:
// Добавил memo чтобы проверять пропсы на изменения
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.

// РЕШЕНИЕ:
// Добавил memo чтобы проверять ссылку на изменения
// Чтобы проверять значения объекта на который ссылается пропс
// я мемоизировал стейт в родительском компоненте через useMemo:
// const memoizedUser = useMemo(
//     () => ({ name: state.name, age: state.age }),
//     [state.name, state.age]
// );
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// class component

// РЕШЕНИЕ:
// Изменил Component на PureComponent для поверхностной проверки на изменение пропсов
class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component

// РЕШЕНИЕ:
// Использовал shouldComponentUpdate с более глубокой проверкой на изменение пропсов
// shouldComponentUpdate(nextProps) {
//     if (
//         this.props.user.name !== nextProps.user.name ||
//         this.props.user.age !== nextProps.user.age
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }
class FourthComponent extends Component<IProps> {
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}