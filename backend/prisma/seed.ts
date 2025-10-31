import { PrismaClient } from '@prisma/client';

// iniialize prisma client
const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.upsert({
        where: { email: "alice@example.com" },
        update: {},
        create: {
        email: 'alice@example.com',
        username: 'alice_wonder',
        password: 'hashed_password_123', // En production: bcrypt.hash('password', 10)
        fullName: 'Alice Wonderland',
        bio: '📸 Travel photographer | 🌍 Explorer | ☕ Coffee addict',
        avatar: 'https://i.pravatar.cc/150?img=1',
        website: 'https://alice-photos.com',
        isVerified: true,
        }
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'bob@example.com' },
        update: {},
        create: {
        email: 'bob@example.com',
        username: 'bob_builder',
        password: 'hashed_password_456',
        fullName: 'Bob Builder',
        bio: '🏗️ Architecture & Design | 🎨 Creative mind',
        avatar: 'https://i.pravatar.cc/150?img=2',
        isVerified: false,
        },
    });

  const user3 = await prisma.user.upsert({
    where: { email: 'charlie@example.com' },
    update: {},
    create: {
      email: 'charlie@example.com',
      username: 'charlie_chef',
      password: 'hashed_password_789',
      fullName: 'Charlie Chef',
      bio: '👨‍🍳 Food lover | 🍕 Pizza expert | 📍 NYC',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isPrivate: true,
    },
  });

  console.log('Users Created:', {user1, user2, user3});

  const post1 = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      caption: 'Amazing sunset in the mountains 🏔️ #nature #travel',
      location: 'Swiss Alps, Switzerland',
      authorId: user1.id,
    },
  });

    const post2 = await prisma.post.upsert({
        where: { id: 2 },
        update: {},
        create: {
        imageUrl: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad',
        caption: 'Coffee and code ☕💻',
        location: 'Paris, France',
        authorId: user1.id,
        },
    });

    const post3 = await prisma.post.upsert({
        where: { id: 3 },
        update: {},
        create: {
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        caption: 'Modern architecture at its finest 🏢',
        location: 'New York, USA',
        authorId: user2.id,
        },
    });

  const post4 = await prisma.post.upsert({
    where: { id: 4 },
    update: {},
    create: {
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      caption: 'Homemade pizza 🍕 Recipe in bio!',
      location: 'New York, USA',
      authorId: user3.id,
    },
  });

  console.log('Posts Created:', {post1, post2, post3, post4});

    const comment1 = await prisma.comment.create({
        data: {
        content: 'Wow! This is absolutely stunning! 😍',
        authorId: user2.id,
        postId: post1.id,
        },
    });

    const comment2 = await prisma.comment.create({
        data: {
        content: 'Where exactly is this? I need to go there!',
        authorId: user3.id,
        postId: post1.id,
        },
    });

    // Réponse à un commentaire
    const comment3 = await prisma.comment.create({
      data: {
        content: 'It\'s in the Swiss Alps! Highly recommend 🏔️',
        authorId: user1.id,
        postId: post1.id,
        parentCommentId: comment2.id,
      },
    });

    const comment4 = await prisma.comment.create({
    data: {
      content: 'Looks delicious! Can you share the recipe?',
      authorId: user1.id,
      postId: post4.id,
    },
  });
    
  console.log('Comments Created:', {comment1, comment2, comment3, comment4});

  const like1 = await prisma.like.create({
    data: {
      userId: user2.id,
      postId: post1.id,
    },
  });

  const like2 = await prisma.like.create({
    data: {
      userId: user3.id,
      postId: post1.id,
    },
  });

  const like3 = await prisma.like.create({
    data: {
      userId: user1.id,
      postId: post3.id,
    },
  });

  console.log('Likes created:', {like1, like2, like3});

  const follow1 = await prisma.follow.create({
    data: {
      followerId: user2.id, // Bob suit Alice
      followingId: user1.id,
    },
  });  

  const follow2 = await prisma.follow.create({
    data: {
      followerId: user3.id, // Charlie suit Alice
      followingId: user1.id,
    },
  });

  const follow3 = await prisma.follow.create({
    data: {
      followerId: user1.id, // Alice suit Bob
      followingId: user2.id,
    },
  });

  console.log('Follows created:', {follow1, follow2, follow3});

  const now = new Date();
  const in24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const story1 = await prisma.story.create({
    data: {
      imageUrl: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6',
      caption: 'Good morning! ☀️',
      expiresAt: in24Hours,
      authorId: user1.id,
    },
  });

  const story2 = await prisma.story.create({
    data: {
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      caption: 'Coffee time ☕',
      expiresAt: in24Hours,
      authorId: user2.id,
    },
  });

  console.log('Stories created:', {story1, story2});

  const message1 = await prisma.message.create({
    data: {
      content: 'Hey! Love your photos! 📸',
      senderId: user2.id,
      receiverId: user1.id,
      isRead: true,
    },
  });

  const message2 = await prisma.message.create({
    data: {
      content: 'Thanks so much! 😊',
      senderId: user1.id,
      receiverId: user2.id,
      isRead: false,
    },
  });

  console.log('Messages created:', {message1, message2});

  const tag1 = await prisma.tag.upsert({
    where: { name: 'travel' },
    update: {},
    create: {
      name: 'travel',
      postCount: 2,
    },
  });

  const tag2 = await prisma.tag.upsert({
    where: { name: 'nature' },
    update: {},
    create: {
      name: 'nature',
      postCount: 1,
    },
  });

   const tag3 = await prisma.tag.upsert({
    where: { name: 'food' },
    update: {},
    create: {
      name: 'food',
      postCount: 3,
    },
  });

  console.log('Tags created:', {tag1, tag2, tag3});

  const postTag1 = await prisma.postTag.create({
    data: {
      postId: post1.id,
      tagId: tag1.id,
    },
  });

  const postTag2 = await prisma.postTag.create({
    data: {
      postId: post1.id,
      tagId: tag2.id,
    },
  });

  const postTag3 = await prisma.postTag.create({
    data: {
      postId: post1.id,
      tagId: tag3.id,
    },
  });

  console.log('PostTags created:', {postTag1, postTag2, postTag3});
};

// Execute the main function 
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //Close prisma client at the end 
    await prisma.$disconnect();
  });
