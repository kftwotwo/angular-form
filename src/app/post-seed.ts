import { Post } from './post.model';

export const POSTS: Post[] = [
  new Post('mvea',
           'Two-thirds of Americans give priority to developing alternative energy over fossil fuels',
           'http://www.pewresearch.org/fact-tank/2017/01/23/two-thirds-of-americans-give-priority-to-developing-alternative-energy-over-fossil-fuels/',
           'http://assets.pewresearch.org/wp-content/uploads/sites/12/2017/01/20150815/FT_17.01.20_energyPriorities_alternative.png',
           'Futurology', '1/19/17',
           1
         ),
    new Post('avogadros_number',
             'Although there exists a near-unanimous scientific consensus on the reality of human-caused climate change, the general public has become increasingly polarized; however, a new study finds that public attitudes about climate change can be effectively “inoculated” against influential misinformation.',
             'http://www.ibtimes.com/fake-news-vaccine-climate-change-misinformation-can-be-fought-inoculation-scientists-2479360',
             'https://b.thumbs.redditmedia.com/QVE9lJ2MjBbytLsNkyoLHLZvAc0321STMz8cKZPufpk.jpg',
             'Science', '1/21/17',
             2
           ),
      new Post('Amber273', 'Japanese Gamers vs. American Gamers',    'http://i.imgur.com/5yZGw4v.gifv', 'https://b.thumbs.redditmedia.com/WDfhTFYPD5qCx7xW_wB-zTs540OfizvuUqfJgRriYMQ.jpg', 'gaming', '1/23/17', 3)

];
