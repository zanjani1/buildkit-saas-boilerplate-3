// This page contains all the AI modules that are available in the app mostly for previewing purposes.
// You can uncomment the AI module you want to preview and comment out the rest.

import BlogWriter from '@/components/ai-modules/blog-writer';
// import MultiLLmChatGPT from '@/components/ai-modules/multillm-chat';

export default async function AIModules() {
  return (
    <>
      {/* <MultiLLmChatGPT /> */}
      <BlogWriter />
    </>
  );
}
