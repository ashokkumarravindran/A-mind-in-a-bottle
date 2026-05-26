// Mock blog data sourced from amindinabottle.com
// Using the first 6 blog posts with real content

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Under the same sky',
    excerpt: 'When life feels heavy and the world feels indifferent, pause, take a deep breath, gaze at the stars and simply feel the connection.',
    slug: 'under-the-same-sky',
    author: 'Ashok Kumar Ravindran',
    image: 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=1200&h=600&fit=crop',
    imageAlt: 'Starry night sky with stars and cosmic awareness',
    content: `For most of human history we have looked at the universe as something external. A vast stage filled with stars, galaxies and silent emptiness.

And somewhere within that enormous space, life happened to appear. At least that is the story we usually tell ourselves.

But there is another possibility.

Every atom in our body was once forged in ancient stars. The carbon in our cells, the iron in our blood, the calcium in our bones all began their journey in the heart of the cosmos.

Which means something curious is happening. The universe is not just around us. It is within us.

And at some point in its long evolution, matter arranged itself in a way that could think, feel and wonder about existence. In other words, the universe reached a point where it could experience what it is like to exist. Through life. Through consciousness. Through us.

Perhaps life is simply the universe experiencing itself. And consciousness is the moment it realizes that it is.

Yet we spend so much of our lives searching for meaning, chasing purpose, trying to justify our existence.

But what if the most profound meaning was always the simplest one? To exist. To see. To feel. To breathe.

Maybe a lifetime is nothing more than a brief moment where the universe becomes aware of itself through us. And maybe that moment, however small, is already enough.

So tonight, step outside for a moment. Look up at the sky. Gaze at the stars. Take a deep breath. And simply feel it.

The quiet realization that you are not separate from the universe. You are a small fragment of it. A brief moment of its awareness.

Which means even in your hardest moments, when life feels heavy and the world feels indifferent, you are not facing it alone. The universe is experiencing this moment with you.`
  },
  {
    id: '2',
    title: 'The stranger within',
    excerpt: "We chase connection in every direction, rarely realizing we\'re still waiting to come home to ourselves.",
    slug: 'the-stranger-within',
    author: 'Ashok Kumar Ravindran',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop',
    imageAlt: 'Dark silhouette against starry sky, quiet reflection',
    content: `We spend our days surrounded by people, conversations, deadlines, and dreams — yet quietly, many of us carry an ache we can't explain.

It's not the loneliness of missing others. It's the loneliness of missing ourselves.

We live every moment in our own company, but how often do we actually meet the person within? We know our habits, our roles, our playlists — but that's surface-level.

Knowing yourself is sitting with your mind when it's messy, noticing your feelings without rushing to fix them, laughing at your awkwardness, holding space for your doubts.

Uncomfortable? Definitely.

But here's the quiet truth: the more we avoid ourselves, the emptier we feel.

We fill the silence with people, work, or scrolling, not realizing the emptiness isn't out there — it's the distance we've built inside.

And the more we run, the more that stranger within waits, arms crossed, probably rolling their eyes at us.

But they're not here to scold you. They hold your forgotten dreams, your disappointments, your resilience, your softness — the parts you buried under "I'll deal with that later."

Rebuilding that connection doesn't take a grand life reset.

It starts small: noticing when you're hard on yourself, sitting quietly for five minutes without a screen, being curious about your own mind instead of critical.

It's saying, "Hey, I'm here. I see you."

And as you do, something softens.

You stop expecting the world to complete you. You carry yourself with a little more lightness, a little more kindness.

And you realize: no matter what changes, no matter who comes or goes, you have you.

And honestly? That's a relationship worth showing up for.`
  },
  {
    id: '3',
    title: 'A note to self',
    excerpt: 'Somewhere between grief and grace, I found the courage to keep going.',
    slug: 'a-note-to-self',
    author: 'Ashok Kumar Ravindran',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop',
    imageAlt: 'Hand reaching out, resilience and strength in adversity',
    content: `Somewhere along the way, life stopped being about dreams and started becoming about endurance.

Not the loud, cinematic kind — but the quiet, invisible, daily kind. The kind that doesn't look like heroism from the outside, but feels like survival from within.

I've stood on too many hospital floors. Held too many reports I didn't want to read. Watched people I love fight battles their bodies never asked for.

I've seen the quiet devastation of good news that never came. And the eerie stillness that follows after hearing the words, "We need to talk."

I never planned for any of it. But then again — no one ever does.

Love came early in my life. So did fear. And ever since then, it's been a strange duet — the love for what I'm holding on to, and the fear of what I might lose.

Some days, the love wins. Some days, the fear. And in between those days, I search for the courage to keep moving forward.

There's something no one tells you about trauma — it doesn't arrive as a scream. It seeps in through normal days. It rearranges your silence. And before you know it, your laughter carries an echo you can't quite place.

But here's the part I didn't expect: the same life that took so much from me, gave me something too.

It gave me the unshakeable clarity of what matters. It gave me eyes that see beyond appearances. It gave me the kind of love that doesn't break under pressure — it crystallizes. It gave me people who showed up — not with grand gestures, but with steady presence.

And more than anything, it gave me a reason. A purpose I could hold even when everything else felt like it was slipping away.

Somewhere between grief and grace, I found the courage to keep going.`
  },
  {
    id: '4',
    title: 'you have you',
    excerpt: 'When the noise fades and expectations fall away, what remains is your relationship with yourself.',
    slug: 'you-have-you',
    author: 'Ashok Kumar Ravindran',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=600&fit=crop',
    imageAlt: 'Soft warm light, peaceful solitude, self-acceptance',
    content: `In a world that constantly demands we be more, do more, achieve more, there's a quiet rebellion in simply being.

Not being enough for others. Not being impressive or worthy or deserving. Just being. With yourself.

The relationship you have with yourself is the longest relationship you'll ever have. And yet, it's often the most neglected.

We invest in friendships, romantic relationships, professional networks — all while treating the one person we spend every single moment with like an afterthought.

We criticize ourselves with words we'd never use for anyone else. We push ourselves past breaking points. We abandon ourselves at the first sign of discomfort.

And then we wonder why we feel so alone.

But what if the antidote to loneliness isn't more people, more validation, more external affirmation? What if it's finally turning around and facing the person you've been running from?

When the noise fades and expectations fall away, what remains is your relationship with yourself. And that relationship determines everything else.

It determines whether you can truly connect with others, or if you're just using them to fill the void. It determines whether you can handle rejection, because you're not waiting for others to believe in you. It determines your resilience, your creativity, your capacity to love.

You have you. And that's not a consolation prize. That's the entire game.`
  },
  {
    id: '5',
    title: 'in perfect orbit',
    excerpt: 'In relationships, as in nature, we must learn to hold on just enough to stay connected and let go just enough to remain free.',
    slug: 'in-perfect-orbit',
    author: 'Ashok Kumar Ravindran',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&h=600&fit=crop',
    imageAlt: 'Cosmic distance, two elements in balance, orbital metaphor',
    content: `Love is not possession. It's not control, or ownership, or the promise to never leave.

Love, at its finest, is orbital. It's two bodies moving through space with enough gravity between them to stay connected, but enough distance to maintain their own orbits.

We live in a culture that mistakes intensity for depth, obsession for devotion, fusion for love.

We're told that true love means losing yourself in another person. That if you're not thinking about them constantly, you don't love them enough. That the ultimate goal is to become one, inseparable, forever.

But this is where we get it wrong.

The healthiest relationships are not those where two people become one. They're the ones where two complete people choose to orbit each other.

In perfect orbit, there's a delicate balance. You get close enough to influence each other, to share gravity, to feel the pull. But you never get so close that you lose your trajectory, your independence, your own light.

It's the paradox of attachment without clinging. Of love without obsession. Of togetherness without fusion.

In perfect orbit, you trust your partner enough to move away without fear they'll disappear. You understand that space isn't rejection — it's the prerequisite for sustainable closeness.

The partners who stay together for decades aren't the ones who stop being individuals. They're the ones who continue to evolve, to maintain their own interests, to respect their partner's need for autonomy.

In perfect orbit, you don't change who you are to keep someone. You become more of who you are, and you find someone who orbits along with you.`
  },
  {
    id: '6',
    title: 'life is now',
    excerpt: 'If you let go of the weight of what was and the worry of what might be, could you embrace life as it is, right now?',
    slug: 'life-is-now',
    author: 'Ashok Kumar Ravindran',
    image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&h=600&fit=crop',
    imageAlt: 'Warm golden light, present moment, stillness',
    content: `We are obsessed with time in a way that robs us of life.

We spend our present grieving the past. We sacrifice our now for a future that may never come. We live our entire lives one step removed from actual living.

The past was. The future might be. The only thing that is, the only moment we actually have any control over, is now.

And yet we treat now like it's an inconvenience to get through. We treat now like it's something that happens while we're busy making other plans.

We tell ourselves, "I'll be happy when." When I finish school. When I get the job. When I find the right person. When I make enough money. When I lose the weight. When I get it right.

But the when never comes. Because even when we achieve those things, our brains are already three steps ahead, chasing the next milestone, the next achievement, the next life-altering moment.

Meanwhile, the actual life-altering moments are happening right now. In this conversation. In this breath. In this ordinary moment that we're too distracted to appreciate.

The past shaped us, yes. And we carry those lessons. But the past has no power except the power we give it. The same is true for the future — we give it power through our anxiety and our planning.

But the present? The present is where all our actual power lives.

This moment, right now, is the only one where we can choose differently. The only one where we can say something true. The only one where we can actually change anything.

Life is not happening tomorrow. It's happening in the space between your heartbeats. It's in the conversation you're half-listening to because you're thinking about what you'll eat for dinner. It's in the hug you're giving while thinking about your to-do list.

Life is now. And the question isn't whether you'll find time for it later. The question is: will you finally show up for the one you're in?`
  }
];
