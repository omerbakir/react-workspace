import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';
import { useInput } from "./hooks/useInput";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Demo = () => {
    const onFinish = (values) => {
        console.log(values);
    };
    const INITIAL_STATE = {
        name: "",
        email: "",
        age: "",
        website: "",
        introduction: "",
    };
    const [inputs, setInputs] = useInput("inputs", INITIAL_STATE);
    console.log(inputs)

    return (
        <Form { ...layout } name="nest-messages" onFinish={ onFinish } validateMessages={ validateMessages }>
            <Form.Item
                name={ ['name'] }
                label="Name"
                initialValue={ inputs.name }
                rules={ [
                    {
                        required: true,
                    },
                ] }
            >
                <Input onChange={ setInputs.bind(this, "name") }/>
            </Form.Item>
            <Form.Item
                name={ ['email'] }
                label="Email"
                initialValue={ inputs.email }
                rules={ [
                    {
                        type: 'email',
                    },
                ] }
            >
                <Input onChange={ setInputs.bind(this, "email") }/>
            </Form.Item>
            <Form.Item
                name={ ['age'] }
                label="Age"
                initialValue={ inputs.age }
                rules={ [
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ] }
            >
                <InputNumber onChange={ setInputs.bind(this, "age") }/>
            </Form.Item>
            <Form.Item
                name={ ['website'] }
                label="Website"
                initialValue={ inputs.website }
            >
                <Input onChange={ setInputs.bind(this, "website") }/>
            </Form.Item>
            <Form.Item name={ ['introduction'] }
                       label="Introduction"
                       initialValue={ inputs.introduction }
            >
                <Input.TextArea onChange={ setInputs.bind(this, "introduction") }/>
            </Form.Item>
            <Form.Item wrapperCol={ { ...layout.wrapperCol, offset: 8 } }>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Demo