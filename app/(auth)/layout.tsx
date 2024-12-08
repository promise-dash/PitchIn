const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#fb601e]">{children}</div>
  );
};

export default Layout;
