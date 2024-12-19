import React from 'react';
import Layout from '@theme/Layout';
import { RedocStandalone } from 'redoc';

const ApiDocs = () => {
  return (
    <Layout title="API Documentation">
      <div>
        <RedocStandalone
          specUrl="/openapi.yaml"
          options={{
            scrollYOffset: 60 // navbarの高さ分のオフセット
          }}
        />
      </div>
    </Layout>
  );
};

export default ApiDocs;
