export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a88666dd98592779aeb5a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y23ue641',
                  apiId: '7d8e70c3-29d4-429e-abc3-4c918891783f'
                },
                {
                  buildHookId: '62a8866664122125c8b0f41d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4xd1bm3b',
                  apiId: '54435b3e-dfac-4b53-92bd-9b41ecced341'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gazzstar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4xd1bm3b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
