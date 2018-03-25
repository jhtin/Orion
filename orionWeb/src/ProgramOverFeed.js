import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const ProgramOverFeed = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src='./elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Arkar</Feed.User> completed a survey
          <Feed.Date>2 days Ago</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img src='./jenny.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Chesa</Feed.User> completed a survey
          <Feed.Date>3 days Ago</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img src='./joe.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Bennu</Feed.User> completed a survey
          <Feed.Date>1 week Ago</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img src='./justen.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Dachen</Feed.User> completed a survey
          <Feed.Date>1 week Ago</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default ProgramOverFeed;
