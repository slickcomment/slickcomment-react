# SlickComment React Component

## Installation

Using npm:

`npm install --save slickcomment-react`

Using yarn:

`yarn add slickcomment-react`

## Usage:

```
import SlickComment from 'slickcomment-react';

function App() {
    return (
        <SlickComment.WidgetDiscussion
            config={{
                communityId: 'REPLACE WITH YOUR VALUE',
                pageId: 'REPLACE WITH YOUR VALUE',
                pageUrl: 'REPLACE WITH YOUR VALUE',
            }}
        />
        
        <SlickComment.WidgetUserComments
            config={{
                communityId: 'REPLACE WITH YOUR VALUE',
                userSsoId: 'REPLACE WITH YOUR VALUE',
            }}
        />

        <SlickComment.WidgetCommunityComments
            config={{
                communityId: 'REPLACE WITH YOUR VALUE',
            }}
        />

        <SlickComment.WidgetModeration
            config={{
                communityId: 'REPLACE WITH YOUR VALUE',
                userSsoId: 'REPLACE WITH CORRECT VALUE',
                getUserSsoToken: () => {
                    // TODO: implement this
                }
            }}
        />
    )
}
```
