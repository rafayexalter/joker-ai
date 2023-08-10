const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  /**
   * This layout page will work for Auth pages that are created. (sign-in, sign-up) It works auto as it's a feature of next.js.
   */
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLayout;
