import UseAdminAuth from "./../CustomHook/useAdminAuth";

const withAdminAuth = (props) => UseAdminAuth(props) && props.children;

export default withAdminAuth;
