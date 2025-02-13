type Props = { message: string };

const Error = ({ message }: Props) => {
  return <p style={{ color: "red" }}>{message}</p>;
};

export default Error;
