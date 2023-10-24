import type { NextPage } from 'next';
import Layout from '../components/layout';
import TextArea from '../components/textarea';
import Button from '../components/button';

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="space-y-4 px-4">
        <TextArea required placeholder="Ask a question!"></TextArea>
        <Button text="Submit"></Button>
      </form>
    </Layout>
  );
};

export default Write;
