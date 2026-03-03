import React, { useState } from 'react';
import {
  ModalPage,
  Button,
  TextBlock,
  Layout,
  LayoutContent,
} from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const Content = (
  <Layout>
    <LayoutContent maxWidth="60rem">
      <TextBlock>
        When Bilbo opened his eyes, he wondered if he had; for it was just as
        dark as with them shut. No one was anywhere near him. Just imagine his
        fright! He could hear nothing, see nothing, and he could feel nothing
        except the stone of the floor.
      </TextBlock>
      <TextBlock>
        Very slowly he got up and groped about on all fours, till he touched the
        wall of the tunnel; but neither up nor down it could he find anything:
        nothing at all, no sign of goblins, no sign of dwarves. His head was
        swimming, and he was far from certain even of the direction they had
        been going in when he had his fall. He guessed as well as he could, and
        crawled along for a good way, till suddenly his hand met what felt like
        a tiny ring of cold metal lying on the floor of the tunnel. It was a
        turning point in his career, but he did not know it. He put the ring in
        his pocket almost without thinking; certainly it did not seem of any
        particular use at the moment. He did not go much further, but sat down
        on the cold floor and gave himself up to complete miserableness, for a
        long while. He thought of himself frying bacon and eggs in his own
        kitchen at home - for he could feel inside that it was high time for
        some meal or other; but that only made him miserabler.
      </TextBlock>
      <TextBlock>
        Very slowly he got up and groped about on all fours, till he touched the
        wall of the tunnel; but neither up nor down it could he find anything:
        nothing at all, no sign of goblins, no sign of dwarves. His head was
        swimming, and he was far from certain even of the direction they had
        been going in when he had his fall. He guessed as well as he could, and
        crawled along for a good way, till suddenly his hand met what felt like
        a tiny ring of cold metal lying on the floor of the tunnel. It was a
        turning point in his career, but he did not know it. He put the ring in
        his pocket almost without thinking; certainly it did not seem of any
        particular use at the moment. He did not go much further, but sat down
        on the cold floor and gave himself up to complete miserableness, for a
        long while. He thought of himself frying bacon and eggs in his own
        kitchen at home - for he could feel inside that it was high time for
        some meal or other; but that only made him miserabler.
      </TextBlock>
      <TextBlock>
        He could not think what to do; nor could he think what had happened; or
        why he had been left behind; or why, if he had been left behind, the
        goblins had not caught him; or even why his head was so sore. The truth
        was he had been lying quiet, out of sight and out of mind, in a very
        dark corner for a long while.
      </TextBlock>
      <TextBlock>
        After some time he felt for his pipe. It was not broken, and that was
        something. Then he felt for his pouch, and there was some tobacco in it,
        and that was something more. Then he felt for matches and he could not
        find any at all, and that shattered his hopes completely. Just as well
        for him, as he agreed when he came to his senses. Goodness knows what
        the striking of matches and the smell of tobacco would have brought on
        him out of dark holes in that horrible place. Still at the moment he
        felt very crushed. But in slapping all his pockets and feeling all round
        himself for matches his hand came on the hilt of his little sword - the
        little dagger that he got from the trolls, and that he had quite
        forgotten; nor do the goblins seem to have noticed it, as he wore it
        inside his breeches.
      </TextBlock>
      <TextBlock>
        Now he drew it out. It shone pale and dim before his eyes. "So it is an
        elvish blade, too," he thought; "and goblins are not very near, and yet
        not far enough."
      </TextBlock>
      <TextBlock>
        But somehow he was comforted. It was rather splendid to be wearing a
        blade made in Gondolin for the goblin-wars of which so many songs had
        sung; and also he had noticed that such weapons made a great impression
        on goblins that came upon them suddenly.{' '}
      </TextBlock>
    </LayoutContent>
  </Layout>
);

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextBlock>
        Use the <code>ModalPage</code> to display an entire page as a modal.
      </TextBlock>
      <Example<typeof ModalPage>
        presetProps={{ children: Content }}
        controlProps={{ open, onClose: () => setOpen(false) }}
        Component={ModalPage}
      >
        {(Component) => (
          <div>
            <Button onClick={() => setOpen(!open)}>Open</Button>
            {Component}
          </div>
        )}
      </Example>
    </>
  );
};
