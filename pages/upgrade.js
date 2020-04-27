import '../style.css';
import Footer from '../components/footer';

export default class Votes extends React.Component {

    render () {
        return (<div>
            <div className="main">
                <div className="alexandrite-header"></div>
                <div className="container">
                    <br/><br/>
                    <h1>Amusement Club upgrade guide</h1>
                    <h3>Last Updated 2020/04/26</h3>
                    <p>
                        At the start of <b>June 2020</b>, Amusement Club will be upgraded to new version (known as 2.0) containing multiple improvements and features. 
                        However, a lot of current functionality will be replaced and changed.
                        <br/>Note that this list might update and you will be notified via daily message.
                    </p>
                    <p>Changes will take effect once new version is released.</p>
                    <p>During the upgrade process the bot will experience major downtime for 4+ hours. You will be notified about the downtime several days in advance.</p>

                    <h2>Craft card replacement process</h2>
                    <p>Crafts are being removed in favor of new effect recipes. The inflation of card count and the change in how cards were claimed significantly reduced the chances of a craft card being claimed. Making them more expensive than they really should be/have been.</p>
                    <p>The art will be taken from the craft cards and made into new 4* cards that will not be claimable. These 4 stars will be exclusively given to those with already made effects or single craft cards not already forged.</p>

                    <h2>Heroes</h2>
                    <p>You will have to get a new hero. Switching is free.</p>
                    <p>Your old hero level will become your personal level.</p>
                    <p>You can now submit your own hero of choice with <code>->hero submit [MAL link]</code> if you are <b>level 25</b>. This will put your hero submission into a review queue to be accepted. Submissions will cost <code>512 * (2 ** user.herosubmits)</code> meaning the more you submit the more they will cost. (Exponential cost)</p>
                    <p>Heroes have two slots on them, these are for passive effect cards you can get recipes for in the <b>store.</b></p>
                    <p>Instead of a 50 star requirement for getting a hero, you'll now need to be <b>level 10</b>.</p>

                    <h2>Effect cards</h2>
                    <p>Effects have been changed from a one time purchase, infinite use item, to a recipe based, limited use item. Passive effects now expire and active use have a usage limit.</p>
                    <p>Passive effects are now attached to <b>Heroes</b> instead of directly in inventory.</p>
                    <p>Attach a passive card to a hero slot with <code>->hero equip [slot] [passive]</code>, upon use it will mark that slot as on cooldown for 24 hours where you cannot change what is in it.</p>
                    
                    <h2>Claiming</h2>
                    <p>Claiming has been limited to 10 cards at a time.</p>
                    <p>Claim window now shows if you have just claimed a favorited card, if a card is a duplicate, and how many of that card you already own.</p>
                    <p>There is no longer a daily limit of claims.</p>
                    <p>4 and 5 stars are not claimable with <code>->claim</code> any longer, see Guild for 4 stars, and Clout for 5 stars.</p>
                    <p>There's now a paginator for claims. Browse your claims in any claim command over 1 card with the arrows. No need to click the link or summon!</p>
                
                    <h2>Tagging</h2>
                    <p>Card tagging is implemented, use <code>->tag [card] #tag</code> to add a tag to a card (This is global, not personal).</p>
                    <p>Tag downvoting is also added, for when someone says Ayano is best/worst girl. Use <code>->tag down [card] #tag</code> to downvote a tag. Enough downvotes on a single tag removes it.</p>
                    <p>If a card already has a tag you want to add, adding the same tag "Upvotes" the tag. Making it require more downvotes to remove the tag.</p>
                    <p><code>->tags [card name]</code> will show you the list of tags on a card as well as how many upvotes/downvotes a specific tag has.</p>
                    <p><code>->tag info [card name] [#tag]</code> will display information about a specific tag.</p>

                    <h2>Auctions</h2>
                    <p>You cannot sell in auctions without having an Auction House (<b>Guild</b>) in your guild.</p>
                    <p>Auction bidding has changed. You can no longer bid without an amount. Now you should bid the max amount you would want to spend, a deposit is taken at this amount. Any bids by others below this price changes the displayed price to that amount as well as increases the amount you will pay to that price. If no one bids below you, you get the card for the listed price at bid and any extra deposit not used is refunded.</p>
                    <p>With an upgraded Auction House(<b>Guild</b>), you can specify auction length with <code>:-X</code> where X is number of hours from 1-10. This does not accept decimals.</p>
                    <p>In line with auction length, auctions for specific prices has been changed to <code>:X</code> where X denotes amount.</p>
                    <p>You can now cancel auctions with over 1 hour remaining and no bids with <code>->auc cancel [ID].</code></p>

                    <h2>Clout</h2>
                    <p>Clout has slightly changed. For collections with Legendaries, you no longer need the Legendary to clout the collection.</p>
                    <p>That leads into the fact that you now need to clout a collection to get it's legendary via a <code>LegendTicket</code> more on that in <b>Inventory</b>. </p>
                    <p><code>->col info [col]</code> lists clout stars, as well as number of times you have clouted (in parenthesis).</p>

                    <h2>Liquify</h2>
                    <p>Added <code>->liq [card]</code>, allowing you to liquify a card for a new currency 🍷 vials. Vials are used in <b>Draw</b>.</p>
                    <p>You are only able to liquify cards in the 1-3★ range, attempts of any higher will be met with a message stating this.</p>
                    <p>You get 🍷 vials in proportion to a percentage of the cost it takes to <b>Draw</b> the card you are liquefying. Vials are based off of current tomato prices, making them a volatile currency.</p>
                    <p>There is no tomato cost for liquefying cards.</p>
                    <p>Requires Smith Hub Level 2 (<b>Guild</b>).</p>

                    <h2>Draw</h2>
                    <p>With your newly gotten 🍷 vials you can now <code>->draw [card]</code> cards. </p>
                    <p>Drawing is limited to the same restrictions as <b>Liquify</b> 1-3★ range. You are unable to draw cards that no one owns. Cards need an eval price to get a vial cost, meaning you can't be the first person with a card via draw.</p>
                    <p>You cannot go into debt with 🍷 vials. You need to have as many vials as you want to use to draw a card</p>
                    <p>Requires Smith Hub Level 2 (<b>Guild</b>)</p>
                    <p>No, you cannot draw craft cards, craft cards are dead. Long live craft cards</p>

                    <h2>Forging</h2>
                    <p>Gone are the days of 1+1=2, 2+2=3 and 3+3=3. Now everything is equal with 1+1=1, and so on. Forging no longer gives you a card of the next rarity. Forging a 1 star and a 1 star will get you a 1 star.</p>
                    <p>Forging cards now costs tomatoes relative to card cost and rarity. You will also recieve vials for forging.</p>
                    <p>You can do <code>->forge [card]</code> and the bot will pick another card within the same rarity and next in name length to forge the selected card with so be careful!</p>

                    <h2>Guild Management</h2>
                    <p>Guild tax can now be set if the guild contains a Castle(See below), with <code>->guild set tax [rate]</code> This will tax claims for a certain percentage and have this tax placed in the guild balance.</p>
                    <p><code>->guild info</code> shows basic information about the current guild such as Guild Level, # of players, Tax %, Building Permissions, as well as the user running the commands, Rank, Progress to next rank, and guild roles(if any).</p>
                    <p>Guild mods/managers have been added, these people are the only ones allowed to lock a guild to a specific collection with <code>->guild lock [col]</code>. Locking costs 100k 🍅 Tomatoes up front and 5000 🍅 Tomatoes a day to keep the lock.</p>
                    <p>To add a Guild mod/manager you need to be server owner and run <code>->guild add mod/manager @user</code>. Please note it's either mod or manager, you do not need both.</p>
                    <p><code>->guild status</code> is only possible if you have a Castle. It displays the current Guild's balance, maintenance fees, and a breakdown of the fees.</p>
                    <p><code>->guild donate</code> has been added. You can use this to donate your own tomatoes to the Guild's balance to help run buildings or to help afford a lock.</p>
                    <p>Building Permissions can be set per guild. This makes it so that anyone below a certain rank in the guild is unable to build/upgrade new buildings. This can be set with <code>->guild set buildrank</code>.</p>

                    <h2>Guild Buildings</h2>
                    <p><b>Castle:</b> To build a castle you must first already have another building in the guild, this allows you to check guild status, set tax, and reduce fees for maintenence.</p>
                    <p><b>Auction House:</b> The auction house must be built to allow you to sell cards on auction, decrease auction fees, and specify auction length.</p>
                    <p><b>Smithing Hub:</b> This building is required for all forging, liquify, and draw actions. Level 1 allows forging, Level 2 allows <b>Liquify</b> and <b>Draw</b>, Level 3 allows the crafting of effects.</p>
                    <p><b>Hero's Quarters:</b> This building lets a guild have a hero. Hero gets chosen based on amount of followers and the guild rank of the followers of a hero in the guild.</p>
                    <p><b>Gacha Bank:</b> This building increases daily amount at level 1, enables 4 star drops at level 2, and adds user level amount of tomatoes to guild balance when a user runs <code>->daily</code>. Note this is the building that will re-enable 4 star drops in servers.</p>
                    <p><b>Tavern:</b> The tavern adds a daily quest per level with the first two levels. Level 3 will unlock quest lines.</p>

                    <h2>Inventory</h2>
                    <p>The inventory acts much like before, but now it will hold guild buildings, legendary tickets, and effect recipes. </p>
                    <p>Current possible inventory items are <code>Legendary Ticket, Effect Recipe, Guild Castle, Auction House, Smithing Hub, Gacha Bank, Hero's Quarters, Tavern</code> (Last 6 were covered above).</p>
                    <p><code>Legendary Ticket</code> or <code>legendticket</code> as it is used in <code>->inv use</code> grants you (1) legendary card from the collection. It will not grant duplicates until you have 1 of each of the legendaries for the collection.</p>

                    <h2>Query</h2>
                    <p>You are no longer able to search card rarities with just a number <code>->ls 5</code>, to add the ability to search via card names with numbers, this has been moved to act like a collection. <code>->ls -5</code>.</p>
                    <p>You can search by tags in <code>->miss</code> and <code>->ls</code> with <code>->ls #tag</code>.</p>

                    <h2>Selling</h2>
                    <p>You can now setup multiple transactions (limit 5) to one user, they will be notified after running <code>->daily</code> about any pending incoming transactions.</p>
                    <p>Selling to bot is no longer limited to specific tomato amounts. Instead it is now based on a percentage of eval.</p>

                    <h2>Store</h2>
                    <p>The store is where you buy guild buildings and effect recipes. </p>
                    <p><code>->store recipe</code> lists all the effect recipes you can buy. </p>
                    <p><code>->store blueprints</code> lists the blueprints you can currently buy.</p> 
                    <p><code>->store info [building ID]</code> will give you more info about the specifics of these buildings for the <b>Guild</b>.</p>
                    <p>Buy blueprints with <code>->store buy [ID]</code> and these will be placed in your inventory.</p>

                    <h2>Transactions</h2>
                    <p><code>->trans</code> is now paginated, meaning you can now go through multiple pages of your transactions instead of being limited to a single page.</p>
                    <p>Transactions now have a seperate icon for auction transactions 🔨. Normal transaction icons from before are still the same.</p>
                    <p>You can now search within your transactions with <code>->trans [query]</code>. For example, <code>->trans -gab</code> lists all transactions with collection Gabriel Dropout.</p>
                    <p><code>->trans info [ID]</code> lists a preview of the card that was sold/bought, as well as what server it was on, and when the transaction took place in EST time.</p>

                    <h2>Profile</h2>
                    <p>Implemented <code>->profile</code> which currently shows your: Level, Cards, Stars, How long you have been playing, and Bot roles.</p>
                    <p>Level 10 will be required to get a hero <b>Heroes</b>.</p>

                    <h2>Misc</h2>
                    <p>You can now view your completed collections with <code>->col -completed</code>.</p>
                    <p><code>->help [arg] -here</code> runs the help command and displays the response in current channel.</p>
                    <p>You can use <code>-f</code> in any command to bypass confirmation dialog.</p>

                    <h2>Craft card replacements</h2>
                    <p>You will get new effect and recipes after upgrade if you already own the following crafts. Craft card is above, replacement is below.</p>

                    <p>
                    <b>Cherry Blossoms</b> | Any card forge is 50% cheaper<br/>
                    <b>Cherry Blossoms</b> | (same effect)
                    </p>

                    <p>
                    <b>Blue Free Eyes</b> | +200 🍅 in ->daily<br/>
                    <b>Cake Day</b> | Get +100 tomatoes in your daily for every claim you did
                    </p>

                    <p>
                    <b>Long-awaited Date</b> | Completes first quest when used<br/>
                    <b>Enlightened Ayano</b> | Completes tier 1 quest when used
                    </p>

                    <p>
                    <b>Sushi Squad</b> | Get 20% more tomatoes when selling a card to bot<br/>
                    <b>The Holy Grail</b> | Get +25% of vials when liquifying 1 and 2-star cards
                    </p>

                    <p>
                    <b>Delightful Sunset</b> | Reduces claim cost by 200 🍅 when used<br/>
                    <b>Claim Recall</b> | Refunds previous claim cost (excluding tax) when used. For multiple card claims it refunds cost of the last card claimed
                    </p>

                    <p>
                    <b>Skies Of Friendship</b> | Get 10% tomatoes back from wins on auction<br/>
                    <b>Skies Of Friendship</b> | (same effect)
                    </p>

                    <p>
                    <b>The Space Unity</b> | Gives a random card from a specified collection when used<br/>
                    <b>The Space Unity</b> | Gives random unique card from a specified non-promo collection
                    </p>

                    <p>
                    <b>Gift From Tohru</b> | Get 3-star card every first claim per day<br/>
                    <b>Gift From Tohru</b> | (same effect)
                    </p>

                    <p>
                    <b>Onward To Victory</b> | Get 50% more hero experience<br/>
                    <b>Onwards To Victory</b> | Get guild rank points 25% faster
                    </p>

                    <p>
                    <b>Hazardous Duo</b> | Shows list of users that have specified card<br/>
                    <b>Powerful Bocchi</b> | Generates tier 1 quest when used
                    </p>

                    <p>
                    <b>The Ruler Jeanne</b> | Get ->daily in 15 hours instead of 20<br/>
                    <b>The Ruler Jeanne</b> | Get ->daily in 17 hours instead of 20
                    </p>

                    <p>
                    <b>The Judgment Day</b> | Grants effect of any useable card<br/>
                    <b>The Judgment Day</b> | (same effect)
                    </p>

                    <h2>Got questions?</h2>
                    <p>Head over to the <a href="https://discord.gg/XKXp666" style={{color: "#eb2196"}}>#support channel of bot's Discord</a></p>

                    <div style={{height: "50px"}}/>
                </div>
            </div>

            <Footer />
        </div>)
    }
}
