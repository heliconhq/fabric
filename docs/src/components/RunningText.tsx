import React from 'react';
import { RunningText, Callout, Title } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <RunningText>
      <p>
        A single component for all of your <em>running text</em>-needs.
      </p>
      <p>
        Most of the components in <em>Fabric</em> are geared towards building
        application uis and data display. This component provides many useful
        features for running text (e.g. documentation):
      </p>

      <ul>
        <li>Limited maximum text width to ensure readability.</li>
        <li>Increased font size.</li>
        <li>
          Styling of common HTML-elements (e.g. lists, paragraphs, headings).
        </li>
      </ul>
    </RunningText>
    <Example<typeof RunningText>
      presetProps={{
        children: (
          <>
            <h1>H1 will render like this</h1>
            <h2>H2 will render like this</h2>
            <h3>H3 will render like this</h3>
            <h4>H4 will render like this</h4>
            <h5>H5 will render like this</h5>

            <p>
              This is a paragraph, rejudice gains endless madness good prejudice
              god noble inexpedient play insofar law snare. Transvaluation
              revaluation decrepit convictions revaluation pious eternal-return.
              Virtues victorious strong truth virtues marvelous contradict
              madness holiest superiority enlightenment morality. Faith ideal
              pious noble fearful depths free endless disgust contradict faith.
              Right
            </p>

            <em>This is an EM tag</em>
            <br />
            <i>This is an I tag</i>
            <br />
            <strong>This is a strong tag</strong>
            <br />
            <ol>
              <li>This is a li wrapped in ol</li>
            </ol>
            <li>This is a li not wrapped in ol</li>

            <s>This is a s tag</s>
          </>
        ),
      }}
      Component={RunningText}
    >
      {(Component) => (
        <div>
          {Component}
          <div></div>
        </div>
      )}
    </Example>

    <Title>Longer example</Title>

    <RunningText>
      <h1>
        You seem malnourished. Are you suffering from intestinal parasites?
      </h1>

      <p>
        When will <em>that</em> be? My fellow Earthicans, as I have
        <i>explained</i> in my book 'Earth in the Balance'', and the much more
        popular ''Harry Potter and the Balance of Earth', we need to defend our
        planet against pollution. Also dark wizards.
      </p>

      <p>
        Oh sure! <strong>Blame the wizards!</strong> You can see how I lived
        before I met you. Ah, yes! John Quincy Adding Machine. He struck a chord
        with the voters when he pledged not to go on a killing spree. Ok, we'll
        go deliver this crate like professionals, and then we'll go ride the
        bumper cars.
      </p>

      <h2>Are you crazy? I can't swallow that.</h2>

      <p>
        Isn't it true that you have been <a href="#">paid</a> for your
        testimony? Leela, are you alright? You got wanged on the head. So I
        really am important? How I feel when I'm drunk is correct? Now what?
        What's with you kids? Every other day it's food, food, food. Alright,
        I'll get you some stupid food.
      </p>

      <ol>
        <li>I found what I need. And it's not friends, it's things.</li>
        <li>
          Enough about your promiscuous mother, Hermes! We have bigger problems.
        </li>
        <li>
          <s>You guys realize you live in a sewer, right?</s>
        </li>
      </ol>

      <h2>Shut up and take my money!</h2>

      <p>
        Kids have names? Do a flip! Son, as your lawyer, I declare y'all are in
        a 12-piece bucket o' trouble. But I done struck you a deal: Five hours
        of community service cleanin' up that ol' mess you caused.
      </p>

      <ul>
        <li>Calculon is gonna kill us and it's all everybody else's fault!</li>
        <li>Ow, my spirit!</li>
        <li>Oh, I think we should just stay friends.</li>
      </ul>

      <p>
        Oh, but you can. But you may have to metaphorically make a deal with the
        devil. And by "devil", I mean Robot Devil. And by "metaphorically", I
        mean get your coat. Look, last night was a mistake. Interesting. No,
        wait, the other thing: tedious.
      </p>

      <Callout appearance="negative">
        <p>
          Hey, what kinda party is this? There's no booze and only one hooker.
          Daddy Bender, we're hungry. Are you crazy? I can't swallow that. I'll
          tell them you went down prying the wedding ring off his cold, dead
          finger.
        </p>
      </Callout>

      <h3>Is the Space Pope reptilian!?</h3>

      <p>
        That could be 'my' beautiful soul sitting naked on a couch. If I could
        just learn to play this stupid thing. Wow! A superpowers drug you can
        just rub onto your skin? You'd think it would be something you'd have to
        freebase.
      </p>

      <p>
        With gusto. We're rescuing ya. Large bet on myself in round one. Yes,
        except the Dave Matthews Band doesn't rock. Robot 1-X, save my friends!
        And Zoidberg! Oh, I always feared he might run off like this. Why, why,
        why didn't I break his legs?
      </p>

      <h4>Check it out, y'all.</h4>

      <p>
        Everyone who was invited is here. WINDMILLS DO NOT WORK THAT WAY! GOOD
        NIGHT! Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old
        enough to feel ways about stuff! You can crush me but you can't crush my
        spirit!
      </p>

      <pre>
        This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You
        can't just have your characters announce how they feel. That makes me
        feel angry! Enough about your promiscuous mother, Hermes! We have bigger
        problems.
      </pre>

      <h5>I'm Santa Claus!</h5>

      <p>
        Perhaps, but perhaps your civilization is merely the sewer of an even
        greater society above you! Now that the, uh, garbage ball is in space,
        Doctor, perhaps you can help me with my sexual inhibitions?
      </p>

      <h6>But, like most politicians</h6>

      <p>
        ... he promised more than he could deliver. Ok, we'll go deliver this
        crate like professionals, and then we'll go ride the bumper cars. Good
        news, everyone! I've taught the toaster to feel love!
      </p>

      <h6>The alien mothership is in orbit here</h6>

      <p>
        {' '}
        If we can hit that bullseye, the rest of the dominoes will fall like a
        house of cards. Checkmate. I'm Santa Claus! THE BIG BRAIN AM WINNING
        AGAIN! I AM THE GREETEST! NOW I AM LEAVING EARTH, FOR NO RAISEN!
      </p>
    </RunningText>
  </>
);
